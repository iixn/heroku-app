import {Router} from 'express';
const router = new Router()

router.get('/', (req, res) => res.render('index', { title: 'Personal Blog' }));
router.get('/about', (req, res) => res.render('about', { title: 'About Me' }));
router.get('/contact', (req, res) => res.render('contact', { title: 'Contact Me' }));
router.get('/blogs', (req, res) => res.render('blogs', { title: 'Blogs' }))

export default router
