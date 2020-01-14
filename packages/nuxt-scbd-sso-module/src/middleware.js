import Middleware from './middleware'

const routeRoles  = ({ route }) => route.matched[0].components.default.options.auth
const user        = ({ store }) => store.state.me
const userRoles   = ({ store }) => store.state.me.roles || []
const authorized  = ctx => !routeRoles(ctx) || Boolean(routeRoles(ctx).filter(x => userRoles(ctx).includes(x)).length)
const error401    = { statusCode: 401, message: 'Unauthorized: You must login to use this service, redirecting' }
const error403    = (ctx) => ({ statusCode: 403, message: `Forbidden: ${user(ctx).name} do not have permission to view the URI` })

Middleware.auth = function (ctx){
  if (!routeRoles(ctx)) return // set to false to open up

  if (!user(ctx).isAuthenticated) return authenticate(ctx)

  if (!authorized(ctx)) return ctx.error(error403(ctx))
}

function authenticate({ error, redirect }){
  error(error401)
  return setTimeout(() => redirect(200, '/login'), 6000)
}