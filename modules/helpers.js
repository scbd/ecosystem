export function isEmpty(obj) {
    if (obj == null) return true;
     if (Array.isArray(obj) || typeof obj === 'string') return (obj.length === 0);
     for (var key in obj) if (obj[key]) return false;
     return true;
}

export function getValueByPath(obj, path) {
    const value = path.split('.').reduce((o, i) => o[i], obj)
    return value
}

/**
 * Extension of indexOf method by equality function if specified
 */
export function indexOf(array, obj, fn) {
    if (array) {
        if (fn && typeof fn === 'function') {
            for (let i = 0; i < array.length; i++) {
                if (fn(array[i], obj)) {
                    return i
                }
            }
        } else {
            return array.indexOf(obj)
        }
    }
    return -1
}

/**
 * Mobile detection
 * https://www.abeautifulsite.net/detecting-mobile-devices-with-javascript
 */
export const isMobile = {
    Android: function () {
        return typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
    }
}

export function removeElement(el) {
    if (typeof el.remove !== 'undefined') {
        el.remove()
    } else {
        el.parentNode.removeChild(el)
    }
}
