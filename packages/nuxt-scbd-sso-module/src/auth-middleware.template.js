import Middleware from './middleware'

const routeRoles  = ({ route }) => route.matched[0]? route.matched[0].components.default.options.auth : false
const user        = ({ store }) => store.state.me
const userRoles   = ({ store }) => store.state.me.roles || []
const authorized  = ctx => !routeRoles(ctx) || Boolean(routeRoles(ctx).filter(x => userRoles(ctx).includes(x)).length)
const error403    = (ctx) => ctx.error({ statusCode: 403, message: `Forbidden: ${user(ctx).name} do not have permission to view the URI` })

// eslint-disable-next-line rule
const options = <%= JSON.stringify(options, null, 2) %> // eslint-disable-line

Middleware[options.middlewareNameSpace] = function (ctx){

  if (!routeRoles(ctx)) return // set to false to open up

  if (!user(ctx).isAuthenticated) return authenticate(ctx)

  if (!authorized(ctx)) return error403(ctx)
}

function authenticate({ redirect, route }){
  const { fullPath } =  route
  
  if(options.login)
    return redirect(200, options.login+`?returnUrl=${encodeURIComponent(fullPath)}`)
}

