// import `.scss` files
// import UserList class
import { circleContact, circleDetail, circleProducts, circleWeDo, scrollIt, smoothScrollTop } from "./assets/js/smooth-scroll/smooth-scroll";
import { changeTextToEnglishLanguage, changeTextToSpanishLanguage, detectScreenSize, getContactPosition, getDetailPosition, getMenuOptionsRedirectContact, getMenuOptionsRedirectDetails, getMenuOptionsRedirectInfo, getMenuOptionsRedirectMenu, getMenuOptionsRedirectProducts, getNavigationOptionsRedirectContact, getNavigationOptionsRedirectDetail, getNavigationOptionsRedirectInfo, getNavigationOptionsRedirectProducts, getProductsPosition, getWeDoPosition, onLoadPage } from './lib/controller';
import './scss/styles.scss';
import { contactFormText, contactFormTextEnglish, contactText, contactTextEnglish } from './util/text-page/contact';
import { detailText, detailTextEnglish } from './util/text-page/detail';
import { footerText, footerTextEnglish } from './util/text-page/footer';
import { infoEnglishWord0, infoEnglishWord1, infoEnglishWord2, infoEnglishWord3, infoWord0, infoWord1, infoWord2, infoWord3 } from './util/text-page/info';
import { english, spanish } from './util/text-page/menu';
import { productFirstSection, productFirstSectionEnglish, productLittleWord, productLittleWordEnglish, productSecondSection, productSecondSectionEnglish, productsMain, productsMainEnglish } from './util/text-page/products';
import { whatWeDo, whatWeDoEnglish } from './util/text-page/what-we-do.section';

class LandingPageModule {
  constructor() {}
}

detectScreenSize().subscribe((data) => console.log(data.target.innerWidth, data.target.innerHeight))

onLoadPage().subscribe((data) => {
  Particles.init(particles);
  /* menu */
  document.getElementById('start').innerText = spanish.start;
  document.getElementById('app').innerText = spanish.app;
  document.getElementById('how').innerText = spanish.how;
  document.getElementById('us').innerText = spanish.us;
  document.getElementById('contact-us').innerText = spanish.contact;
  document.getElementById('loan').innerText = spanish.loan;
  /* navigator page */
  document.getElementById("navigate-info").innerHTML = `<svg height="24" width="24" id="svg-info" viewBox="0 0 48 48">
                                                          <circle class="inner" cx="24" cy="24" r="10" />
                                                        </svg>`;
  document.getElementById("navigate-products").innerHTML = `<svg height="24" width="24" id="svg-products" viewBox="0 0 48 48">
                                                              <circle class="inner" cx="24" cy="24" r="10" />
                                                            </svg>`;
  document.getElementById("navigate-detail").innerHTML = `<svg height="24" width="24" id="svg-detail" viewBox="0 0 48 48">
                                                            <circle class="inner" cx="24" cy="24" r="10" />
                                                          </svg>`;
  document.getElementById("navigate-contact").innerHTML = `<svg height="24" width="24" id="svg-contact" viewBox="0 0 48 48">
                                                              <circle class="inner" cx="24" cy="24" r="10" />
                                                            </svg>`;
  /* what we do section */
  document.getElementById('whatTitle').innerText = whatWeDo.title;
  document.getElementById('whatSubTitle').innerText = whatWeDo.subTitle;
  document.getElementById('whatWord1').innerText = whatWeDo.text1;
  document.getElementById('whatWord2').innerText = whatWeDo.text2;
  /* info section */
  document.getElementById('info-main-tilte').innerText = infoWord0.title;
  document.getElementById('info-main-subtilte').innerText = infoWord0.subtitle;
  document.getElementById('info-secondary1-title').innerText = infoWord1.title;
  document.getElementById('info-secondary1-word').innerText = infoWord1.word;
  document.getElementById('info-secondary2-title').innerText = infoWord2.title;
  document.getElementById('info-secondary2-word').innerText = infoWord2.word;
  document.getElementById('info-secondary3-title').innerText = infoWord3.title;
  document.getElementById('info-secondary3-word').innerText = infoWord3.word;
  /* products section */
  document.getElementById('product-title').innerText = productsMain.title;
  document.getElementById('product-first-subtitle').innerText = productFirstSection.subtitle;
  document.getElementById('product-first-word1').innerText = productFirstSection.word1;
  document.getElementById('product-first-word2').innerText = productFirstSection.word2;
  document.getElementById('product-first-word3').innerText = productFirstSection.word3;
  document.getElementById('product-first-word4').innerText = productFirstSection.word4;
  document.getElementById('product-second-subtitle').innerText = productSecondSection.subtitle;
  document.getElementById('product-second-word1').innerText = productSecondSection.word;
  document.getElementById('product-small-text').innerText = productLittleWord;
  /* detail section */
  document.getElementById('detail-title').innerText = detailText.title;
  document.getElementById('detail-subtitle').innerText = detailText.subtitle;
  document.getElementById('detail-word').innerText = detailText.word;
  /* contact section */
  document.getElementById('contact-title').innerText = contactText.title;
  document.getElementById('contact-word1').innerText = contactText.word1;
  document.getElementById('contact-word2').innerText = contactText.word2;
  document.getElementById('contact-form-name').innerText = contactFormText.name;
  document.getElementById('contact-form-email').innerText = contactFormText.email;
  document.getElementById('contact-form-subject').innerText = contactFormText.subject;
  document.getElementById("contact-form-message").placeholder = contactFormText.message;
  document.getElementById("send-email").innerText = 'Enviar';
  /* footer section */
  document.getElementById("footer-word").innerText = footerText.word;
  document.getElementById("footer-location").innerHTML = `<i class="material-icons" style="color: #ffff" >location_on</i>${footerText.location}`;
  document.getElementById("footer-copy").innerText = footerText.copyright;
})

getMenuOptionsRedirectMenu().subscribe((data) => {
  smoothScrollTop('#menu', 2000, false);
})

getMenuOptionsRedirectInfo().subscribe((data) => {
  smoothScrollTop('#what-we-do', 2000, false);
})

getMenuOptionsRedirectProducts().subscribe((data) => {
  smoothScrollTop('#products', 2000, false);
})

getMenuOptionsRedirectDetails().subscribe((data) => {
  smoothScrollTop('#detail', 2000, false);
})

getMenuOptionsRedirectContact().subscribe((data) => {
  smoothScrollTop('#contact', 2000, false);
})

changeTextToSpanishLanguage().subscribe((data) => {
  /* menu */
  document.getElementById('start').innerText = spanish.start;
  document.getElementById('app').innerText = spanish.app;
  document.getElementById('how').innerText = spanish.how;
  document.getElementById('us').innerText = spanish.us;
  document.getElementById('contact-us').innerText = spanish.contact;
  document.getElementById('loan').innerText = spanish.loan;
  /* what we do section */
  document.getElementById('whatTitle').innerText = whatWeDo.title;
  document.getElementById('whatSubTitle').innerText = whatWeDo.subTitle;
  document.getElementById('whatWord1').innerText = whatWeDo.text1;
  document.getElementById('whatWord2').innerText = whatWeDo.text2;
  /* info section */
  document.getElementById('info-main-tilte').innerText = infoWord0.title;
  document.getElementById('info-main-subtilte').innerText = infoWord0.subtitle;
  document.getElementById('info-secondary1-title').innerText = infoWord1.title;
  document.getElementById('info-secondary1-word').innerText = infoWord1.word;
  document.getElementById('info-secondary2-title').innerText = infoWord2.title;
  document.getElementById('info-secondary2-word').innerText = infoWord2.word;
  document.getElementById('info-secondary3-title').innerText = infoWord3.title;
  document.getElementById('info-secondary3-word').innerText = infoWord3.word;
  /* products section */
  document.getElementById('product-title').innerText = productsMain.title;
  document.getElementById('product-first-subtitle').innerText = productFirstSection.subtitle;
  document.getElementById('product-first-word1').innerText = productFirstSection.word1;
  document.getElementById('product-first-word2').innerText = productFirstSection.word2;
  document.getElementById('product-first-word3').innerText = productFirstSection.word3;
  document.getElementById('product-first-word4').innerText = productFirstSection.word4;
  document.getElementById('product-second-subtitle').innerText = productSecondSection.subtitle;
  document.getElementById('product-second-word1').innerText = productSecondSection.word;
  document.getElementById('product-small-text').innerText = productLittleWord;
  /* detail section */
  document.getElementById('detail-title').innerText = detailText.title;
  document.getElementById('detail-subtitle').innerText = detailText.subtitle;
  document.getElementById('detail-word').innerText = detailText.word;
  /* contact section */
  document.getElementById('contact-title').innerText = contactText.title;
  document.getElementById('contact-word1').innerText = contactText.word1;
  document.getElementById('contact-word2').innerText = contactText.word2;
  document.getElementById('contact-form-name').innerText = contactFormText.name;
  document.getElementById('contact-form-email').innerText = contactFormText.email;
  document.getElementById('contact-form-subject').innerText = contactFormText.subject;
  document.getElementById("contact-form-message").placeholder = contactFormText.message;
  document.getElementById("send-email").innerText = 'Enviar';
  /* footer section */
  document.getElementById("footer-word").innerText = footerText.word;
  document.getElementById("footer-location").innerHTML = `<i class="material-icons" style="color: #ffff" >location_on</i>${footerText.location}`;
  document.getElementById("footer-copy").innerText = footerText.copyright;
})

changeTextToEnglishLanguage().subscribe((data) => {
  /* menu */
  document.getElementById('start').innerText = english.start;
  document.getElementById('app').innerText = english.app;
  document.getElementById('how').innerText = english.how;
  document.getElementById('us').innerText = english.us;
  document.getElementById('contact-us').innerText = english.contact;
  document.getElementById('loan').innerText = english.loan;
  /* what we do section */
  document.getElementById('whatTitle').innerText = whatWeDoEnglish.title;
  document.getElementById('whatSubTitle').innerText = whatWeDoEnglish.subTitle;
  document.getElementById('whatWord1').innerText = whatWeDoEnglish.text1;
  document.getElementById('whatWord2').innerText = whatWeDoEnglish.text2;
  /* info section */
  document.getElementById('info-main-tilte').innerText = infoEnglishWord0.title;
  document.getElementById('info-main-subtilte').innerText = infoEnglishWord0.subtitle;
  document.getElementById('info-secondary1-title').innerText = infoEnglishWord1.title;
  document.getElementById('info-secondary1-word').innerText = infoEnglishWord1.word;
  document.getElementById('info-secondary2-title').innerText = infoEnglishWord2.title;
  document.getElementById('info-secondary2-word').innerText = infoEnglishWord2.word;
  document.getElementById('info-secondary3-title').innerText = infoEnglishWord3.title;
  document.getElementById('info-secondary3-word').innerText = infoEnglishWord3.word;
  /* products section */
  document.getElementById('product-title').innerText = productsMainEnglish.title;
  document.getElementById('product-first-subtitle').innerText = productFirstSectionEnglish.subtitle;
  document.getElementById('product-first-word1').innerText = productFirstSectionEnglish.word1;
  document.getElementById('product-first-word2').innerText = productFirstSectionEnglish.word2;
  document.getElementById('product-first-word3').innerText = productFirstSectionEnglish.word3;
  document.getElementById('product-first-word4').innerText = productFirstSectionEnglish.word4;
  document.getElementById('product-second-subtitle').innerText = productSecondSectionEnglish.subtitle;
  document.getElementById('product-second-word1').innerText = productSecondSectionEnglish.word;
  document.getElementById('product-small-text').innerText = productLittleWordEnglish;
  /* detail section */
  document.getElementById('detail-title').innerText = detailTextEnglish.title;
  document.getElementById('detail-subtitle').innerText = detailTextEnglish.subtitle;
  document.getElementById('detail-word').innerText = detailTextEnglish.word;
  /* contact section */
  document.getElementById('contact-title').innerText = contactTextEnglish.title;
  document.getElementById('contact-word1').innerText = contactTextEnglish.word1;
  document.getElementById('contact-word2').innerText = contactTextEnglish.word2;
  document.getElementById('contact-form-name').innerText = contactFormTextEnglish.name;
  document.getElementById('contact-form-email').innerText = contactFormTextEnglish.email;
  document.getElementById('contact-form-subject').innerText = contactFormTextEnglish.subject;
  document.getElementById("contact-form-message").placeholder = contactFormTextEnglish.message;
  document.getElementById("send-email").innerText = 'Send';
  /* footer section */
  document.getElementById("footer-word").innerText = footerTextEnglish.word;
  document.getElementById("footer-location").innerHTML = `<i class="material-icons" style="color: #ffff" >location_on</i>${footerTextEnglish.location}`;
  document.getElementById("footer-copy").innerText = footerTextEnglish.copyright;
})

getNavigationOptionsRedirectInfo().subscribe((data) => {
  scrollIt(document.querySelector('#what-we-do'), 300, 'easeOutQuad', () => console.log(`Just finished scrolling to ${window.pageYOffset}px`));
  circleWeDo();
})

getNavigationOptionsRedirectProducts().subscribe((data) => {
  scrollIt(document.querySelector('#products'), 300, 'easeOutQuad', () => console.log(`Just finished scrolling to ${window.pageYOffset}px`));
  circleProducts();
})

getNavigationOptionsRedirectDetail().subscribe((data) => {
  scrollIt(document.querySelector('#detail'), 300, 'easeOutQuad', () => console.log(`Just finished scrolling to ${window.pageYOffset}px`));
  circleDetail();
})

getNavigationOptionsRedirectContact().subscribe((data) => {
  scrollIt(document.querySelector('#contact'), 300, 'easeOutQuad', () => console.log(`Just finished scrolling to ${window.pageYOffset}px`));
  circleContact();
})

getWeDoPosition().subscribe((data) => {
  circleWeDo();
})

getProductsPosition().subscribe((data) => {
  circleProducts();
})

getDetailPosition().subscribe((data) => {
  circleDetail();
})

getContactPosition().subscribe((data) => {
  circleContact();
})


export default LandingPageModule;