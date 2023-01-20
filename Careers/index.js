const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('I was asked to pick one useful assignment, however one cannot go without being mentioned. The assignment where we were grouped and had to find the definition to finance terms was also very useful. As I get more jobs I find that vocabulary like gross income, net income, and pension are used very often and I was happy I learned what they are. PS: My group has not received our prize for completing it first :)', 'success')
  })
}