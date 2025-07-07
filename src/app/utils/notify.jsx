import { toast } from 'react-toastify'

export const notify = (text, color = "green", time = 2) =>
    toast(` 🔔  ${text} `, {
        position: 'top-center',
        autoClose: time * 1000,
        autoBackgroundColor: '#777',

        style: {
            background: color,
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '18px',
        },
    })
