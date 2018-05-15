//vue directive
export default  {
  inserted:inserted
}

//============================================================
//
//============================================================
function inserted(el, binding) {
  if(typeof window === 'undefined') return //ssr

  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  el.addEventListener('touchstart',touchStart, false);

  el.addEventListener('touchend',touchEnd, false);


  //============================================================
  //
  //============================================================
  function touchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
    touchStartY = event.changedTouches[0].screenY;
  }

  //============================================================
  //
  //============================================================
  function touchEnd(event) {
    touchEndX = event.changedTouches[0].screenX;
    touchEndY = event.changedTouches[0].screenY;
    let points = {touchStartX,touchStartY,touchEndX,touchEndY}
    handleGesture(event,points,binding.value);
  }
}


//============================================================
//
//============================================================
function handleGesture(e, points, params) {
    if(typeof window === 'undefined') return //ssr

    const limit = Math.tan(45 * 1.5 / 180 * Math.PI);
    let pageWidth = window.innerWidth || document.body.clientWidth;
    let x = points.touchendX - points.touchstartX;
    let y = points.touchendY - points.touchstartY;
    let xy = Math.abs(x / y);
    let yx = Math.abs(y / x);
    let treshold = Math.max(1,Math.floor(0.01 * (pageWidth)));

    if (Math.abs(x) > treshold || Math.abs(y) > treshold) {
        if (yx <= limit)
            if (x < 0)
              if(params.left) params.left(e, points)
            else
              if(params.right) params.right(e, points)

        if (xy <= limit)
            if (y < 0)
              if(params.up) params.up(e, points)

              else if(params.down) params.down(e, points)


    } else
        if(params.tap) params.tap(e, points)

}
