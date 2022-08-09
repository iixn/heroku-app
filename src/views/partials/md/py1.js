const { marked } = require('marked')

const content = document.getElementById('content')
content.innerHTML = "<h1>Hola</h1>"
marked.parse('# Marked in Node.js\n\nRendered by **marked**.')
