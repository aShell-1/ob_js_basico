const parrafos = document.querySelectorAll('p')
const secciones = document.querySelectorAll('.seccion')
const papelera = document.querySelector('.img-papelera')

parrafos.forEach(p => {
  p.addEventListener('dragstart', event => {
    p.classList.add('dragging')
    event.dataTransfer.setData("id", p.id)

    const img_fantasma = document.querySelector('.img-fantasma')
    event.dataTransfer.setDragImage(img_fantasma,25,25)
  })

  p.addEventListener('dragend', () => {
    p.classList.remove('dragging')
  })
})

secciones.forEach(seccion => {
  seccion.addEventListener('dragover', event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  })

  seccion.addEventListener('drop', event => {
    const id_p = event.dataTransfer.getData('id')
    const p = document.getElementById(id_p)
    seccion.appendChild(p)
  })
})

papelera.addEventListener('dragover', event => {
  event.preventDefault()
  event.dataTransfer.dropEffect = 'move'
})

papelera.addEventListener('drop', (event) => {
  const id_p = event.dataTransfer.getData('id')
  const p = document.getElementById(id_p)
  p.remove()
})
