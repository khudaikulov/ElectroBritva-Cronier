// Маска для телефона
let selector = document.querySelector('#tel')
let im = new Inputmask('+7(999) 999-99-99')
im.mask(selector)

// Получаем элементы формы
const nameField = document.getElementById('name')
const telField = document.getElementById('tel')
const submitBtn = document.getElementById('submitBtn')

// Ошибки валидации
const nameError = document.getElementById('nameError')
const telError = document.getElementById('telError')

// Функция для проверки имени
function validateName() {
	const nameValue = nameField.value.trim()
	if (!nameValue) {
		nameError.textContent = 'Введите имя'
		return false
	} else if (nameValue.length < 2) {
		nameError.textContent = 'Минимум 2 символа'
		return false
	} else {
		nameError.textContent = ''
		return true
	}
}

// Функция для проверки телефона
function validatePhone() {
	const phone = telField.inputmask.unmaskedvalue()
	if (!phone || phone.length === 0) {
		telError.textContent = 'Введите телефон'
		return false
	} else if (phone.length !== 10) {
		telError.textContent = 'Введите телефон полностью'
		return false
	} else {
		telError.textContent = ''
		return true
	}
}

// Функция для проверки всей формы
function validateForm() {
	const isNameValid = validateName()
	const isPhoneValid = validatePhone()

	// Если все поля валидны, активируем кнопку
	submitBtn.disabled = !(isNameValid && isPhoneValid)
}

// Проверка валидации при изменении полей
nameField.addEventListener('input', validateForm)
telField.addEventListener('input', validateForm)

// Проверка формы при отправке (дополнительно)
document.getElementById('myForm').addEventListener('submit', function (event) {
	if (submitBtn.disabled) {
		event.preventDefault() // Останавливаем отправку, если есть ошибки
	}
})
