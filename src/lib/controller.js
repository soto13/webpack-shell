import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

/* screen size */
export const detectScreenSize = () => {
  return fromEvent(window, 'resize').pipe(map(data => data));
}

/* start page */
export const onLoadPage = () => {
  return fromEvent(window, 'load').pipe(map(data => data));
}

/* menu options */
export const getMenuOptionsRedirectMenu = () => {
  const option = document.getElementById('redirect-menu');
  return fromEvent(option, 'click').pipe(x => x);
}

export const getMenuOptionsRedirectInfo = () => {
  const option = document.getElementById('redirect-info');
  return fromEvent(option, 'click').pipe(x => x);
}

export const getMenuOptionsRedirectProducts = () => {
  const option = document.getElementById('redirect-products');
  return fromEvent(option, 'click').pipe(x => x);
}

export const getMenuOptionsRedirectDetails = () => {
  const option = document.getElementById('redirect-detail');
  return fromEvent(option, 'click').pipe(x => x);
}

export const getMenuOptionsRedirectContact = () => {
  const option = document.getElementById('redirect-contact');
  return fromEvent(option, 'click').pipe(x => x);
}

/* change languages */
export const changeTextToSpanishLanguage = () => {
  const spanish = document.getElementsByClassName('spanish'); 
  return fromEvent(spanish, 'click').pipe(map(x => x));
}

export const changeTextToEnglishLanguage = () => {
  const english = document.getElementsByClassName('english'); 
  return fromEvent(english, 'click').pipe(map(x => x));
}

/* navigation options */
export const getNavigationOptionsRedirectInfo = () => {
  const option = document.getElementById('navigate-info');
  return fromEvent(option, 'click').pipe(x => x);
}

export const getNavigationOptionsRedirectProducts = () => {
  const option = document.getElementById('navigate-products');
  return fromEvent(option, 'click').pipe(x => x);
}

export const getNavigationOptionsRedirectDetail = () => {
  const option = document.getElementById('navigate-detail');
  return fromEvent(option, 'click').pipe(x => x);
}

export const getNavigationOptionsRedirectContact = () => {
  const option = document.getElementById('navigate-contact');
  return fromEvent(option, 'click').pipe(x => x);
}
/* position */
export const getWeDoPosition = () => {
  const menu = document.getElementById('what-we-do');
  return fromEvent(menu, 'mouseover').pipe(x => x);
}

export const getProductsPosition = () => {
  const menu = document.getElementById('products');
  return fromEvent(menu, 'mouseover').pipe(x => x);
}

export const getDetailPosition = () => {
  const menu = document.getElementById('detail');
  return fromEvent(menu, 'mouseover').pipe(x => x);
}

export const getContactPosition = () => {
  const menu = document.getElementById('contact');
  return fromEvent(menu, 'mouseover').pipe(x => x);
}
