import {navbar} from './navbar.js'
import {cookie} from './cookie.js'
import {smoothScroll} from './smooth-scroll.js'
import {customSelect} from './custom-select.js'
import {carousel} from './carousel.js'
import {activities} from './activities.js'
import {modal} from './modal.js'
import {lastPosts} from './last-posts.js'
import {respNavigation} from './resp-navigation.js'
import {faq} from './faq.js'
import {searchActivity} from './search-activity'
import {activitiesPreview} from './activities-preview'
import {modalNewsletter} from './modal-newsletter'
import {woocommerce} from './woocommerce'

// Document ready
jQuery($ => {

	customSelect($);
	cookie($);
	navbar($);
	activitiesPreview($);
	smoothScroll($);
	carousel($);
	activities($);
	modal($);
	lastPosts($);
	respNavigation($);
	faq($);
	modalNewsletter($);
	searchActivity($);
	woocommerce($)

});

