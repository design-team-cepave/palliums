import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fasolid from '@fortawesome/fontawesome-free-solid';
import fabrands from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(fasolid, fabrands);

import Background from './Background.vue'
import HeadBar from './HeadBar.vue'
import Button from './Button.vue'
import FeatureItem from './FeatureItem.vue'
import Hexagon from './Hexagon.vue'
import Line from './Line.vue'
import Avatar from './Avatar.vue'
import Accordion from './Accordion.vue'
import Grid from './Grid.vue'

Vue.component('background', Background)
Vue.component('headbar', HeadBar)
Vue.component('p-button', Button)
Vue.component('feature-item', FeatureItem)
Vue.component('hexagon', Hexagon)
Vue.component('p-line', Line)
Vue.component('avatar', Avatar)
Vue.component('accordion', Accordion)
Vue.component('grid', Grid)
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)