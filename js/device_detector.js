(() => {
    const setLabel = (value) => {
        const label = document.getElementById('extended')
        switch(value) {
            case true:
                label.className = 'extended-true'
                label.innerText = true
                return
            case false:
                label.className = 'extended-false'
                label.innerText = false
                return
            default:
                label.className = 'extended-undefined'
                label.innerText = undefined
        }
    }

    console.log('device detector')
    console.log('screen object', window.screen)
    const isExtended = window.screen.isExtended
    setLabel(isExtended)
    console.log('isExtended', isExtended)

    try {
      window.screen.onchange = event => {
        const isExtended = event.currentTarget.isExtended
        setLabel(isExtended)
        console.log('Screen change detected. isExtended -', isExtended)
      }
    } catch (error) {
      console.error('screen detection failed', error);
    }
})()