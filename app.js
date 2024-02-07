const body = document.querySelector('body')
const btnLight = document.querySelector('#btn-light')
const btnDark = document.querySelector('#btn-dark')
const userInfo = document.querySelector('#user-info')
const userCount = document.querySelector('#user-count')

function changeBody(b, uInfo, uCount) {
    return (colorChangeBtn, uColor, backColor) => {
        colorChangeBtn.addEventListener('click', () => {
            b.style = `
            height: 100vh;
            background: ${backColor}; 
            display: flex; 
            justify-content: center; 
            align-items: center;
            text-align: center;
            transition: 500ms;
            overflow-y: hidden;
            `
            uInfo.style = `
            color: ${uColor}; 
            font-size: 50px;
            transition: 300ms;
            `
            uCount.style = `
            color: ${uColor}; 
            font-size: 25px; 
            margin-bottom: 10px;
            transition: 300ms;
            `
        })
    }
}

const setBody = changeBody(body, userInfo, userCount)
setBody(btnLight, '#000', '#fff')
setBody(btnDark, '#fff', '#000')

btnLight.addEventListener('click', () => {
    btnLight.style = 'display: none'
    btnDark.style = 'display: inline'
})

btnDark.addEventListener('click', () => {
    btnLight.style = 'display: inline'
    btnDark.style = 'display: none'
})

const btnFirstName = document.querySelector('#btn-first-name')
const btnLastName = document.querySelector('#btn-last-name')
const btnAge = document.querySelector('#btn-age')
const btnBirthDate = document.querySelector('#btn-birth-date')

function showUsers(info, btn1, btn2, btn3, btn4) {
    return (firstName, lastName, age, birthDate) => {
        const user = {
                userFirstName: firstName,
                userLastName: lastName,
                userAge: age,
                userBirthDate: birthDate
            }


        const btnHandler = (showText) => {
            return (showBtn, content ) => {
                showBtn.addEventListener('click', () => {
                    userInfo.textContent = 'Loading...'
                    setTimeout(() => showText.textContent = content, 600)
                })
            }
        }

        const showUserInfo = btnHandler(info)
        showUserInfo(btn1, user.userFirstName)
        showUserInfo(btn2, user.userLastName)
        showUserInfo(btn3, user.userAge)
        showUserInfo(btn4, user.userBirthDate)
    }
}

const showUserFullInfo = showUsers(userInfo, btnFirstName, btnLastName, btnAge, btnBirthDate)
showUserFullInfo('Jack', 'Makalister', 20, '23.05.2004')
