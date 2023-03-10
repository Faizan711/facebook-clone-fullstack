import React from 'react'
import './Login.css'
import { auth, provider, signInWithPopup, GoogleAuthProvider} from './firebase'

function Login() {
    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
  return (
    <div className='login'>
        <div className="login_logo">
            <img src="data:image/png;base64,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" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfoAAABiCAMAAACPieHhAAAAhFBMVEX///8Yd/IAbfEAX/ALdPIAcfLO3fyzyvkygvPp8P0AYvCBqvbU4vwAavLZ5v309/7h7f3I2ftHiPNTkPUAWvAAZvCfvviow/n4+/7v9P4AV/BwofZolvSsx/m3zvplmfWRtvi/0/orfvN2pvaSsfcAUvBYlfWNq/dKhPN0nfVdivSduPjyVonDAAAS00lEQVR4nO1d65qiuhKVELyg4A0QdVS8bM/M6fd/vyMqkKRWQbCd0937Y/3slpBkkUqlbun16jDZZdvl8OQ4zum0uG7H2e44qn3gZ2Ed9verbDsOv7ojb8M6nA+SyyH7HEvhWEZ+LDzpPCA9zxOxn7ypk1+FdDSZ77LzdRhEkev7cSCC5eSrO/Up3EZ0XF0OS8cvRhSPP0P9TrqiIF2FXL2ty1+DuXDz2fGqwXk/nPrV5jYgbUTiE9TPpY94/zdQ3x+aI/vp1A88k6TXqU/PEUN8R/03xBupny58jviO+m+I91E/XcY88x313w9voz4d16z5jvpviLdR34/qmO+o/354F/VTeKTrqP/GeBP16aBW3HfUf0O8ifqpU7/oO+q/H95E/cStZ76j/vvhPdSnY9FR/9PwHuqnJyjvpQiCOA5u+Pnum456jDU62Xm+c/7YDXarHMnPnqaOeg5zoN+Lxb/Hnd3rqGeQJgFl/vA3uvt16KiHAFqeXPT/Rne/Dh31EOmVtOL9+Ru9/UJ01ENMh2Yr0sne39cvRUc9BD3byeHgb/T2C9FRDzElp3q5mP+N3n4hOuohpkDL66j/7uiot0RHPURH/U9ER70lOuohOup/IjrqLdFRD9FR/xPRUW+JjnqIjvqfiC+mft3fJVmWJfvP+/an4Xywuje2O07Wlg+tJ/lDSbI69mf1v2yk/jGUZDdvaIjBqH/v/UfeQPpSCzek4fw+n9lq0G9k8WXqZypII/L3fqT9YjYlLYyShZ8nLufxW7EbOVk1Z2k4MxDWTcdot3Vc99nWPRzMdeUhqf+cRruD8pDvu1GwrHmknvr5ISiGcmvIGbfyWIfJUuQdicvOx4tLvy3/8/FQmYPbeFxxSOo+QzvqU5OJWc9VAGJ0ZKz+wN2cjkaT+6Eba++WQTQsZmyycQ1E7GROtoEb0wQQKWI3PnCyZ3K+/dczx+7dWhozs1VD/TQLfH0owvXPloInPAdu4JG2he8v9/bs74eRH1DPeewGZ3ZXsqN+aTLh9ijbdfAO+nraOygRX0bLh3CY0R0EjyDNPFzK4fGQcL0EzN9KuGwEsXCH8Cvjqd95KM9UbGzClPJKFOyc+eJi9f1Mt65PaKzG4zBOVCvq9zTBoiX1YqsupnDJVWAQ0X2dWlKfZkHclPoRe0eD/FVclxKcT/kCrHyO+tGV64KIdg2cDQJuHorOxxndKE2c+a/n2Yrcw7fbUH+i31Rb6sfK9zuQNX39J58vO+rncLmZcPWtZuI0PyRiGjrOUD/5TcMSq1cv6ygbndyG7/aGWJo7pYFVA/E5ZIw+Zhvqz6CHLakPLtXSS8jOpiHn3ob6aU0ND/XBobbVZE1i4vFQcLWjfrKonfjA4TnbWXXfkf64buHXFjVQ+iqoBLKgfgLy6UTbVf9RMd+Qk+v8M7GhfnSyG7Qmb3rXmjWqP7awoX70q6E9L2YoS89NqWol4iWrp4+85iX/gAzGL1C/oFT5q7ZqXilBV7LxY3ctqJ/VbRpaV1WBWb9GNZjcI+rDS+OX5EnM/LUhM1lFwGU0hE2rSBvQtjX1GV30Mui1o16WKXdHEsEJOnlYN1Fvzbx0lAeX9sznh5Im6rdnnG+mgW4dd+btRNYTTDZLWL9zklYM7hupHwEdbzNrS/3wqWPODjYS191TG9FE75QtieJcjebQ/NWpb5SXeuqdU1Nm+R0RVa8bis9QBAcg86dOq/HcRqQNqJl6MF/BudeSeq+w62a2ey3ptkr9emu9aPxBqV8C8VUL76S+E1BviQ0h7VhffAbAB4e8RUvmb8PX0p2bqB+A+XJ7ralfPswkNuKe6bZCQ7q3VpGkLO0zIRBf9594XkDseo9eq7L6deqFKfJhcmoDfHLGG7fvj6dtHA3Up7/ppDxsqu3e+TDmpc1qEQeV+pm9diMqSUkzhPKO+ZG8bsfbaxDRrsmTYgd7nXpnoytPaSuVo+ioud2jc1cjtO2+gXpwpH9+xC1feW/zyMooTwQBtUErUKifXjhxL0UQ+/dCv0W341Uh7/dIJXOHpZF/msSEfE8xydRSf+8++0F6+rKfc4s+b4RtxU90kb9kfnfvCjeV8qQc7+upnwMhGfVeoP5hlvjAi1644jrOsvEy4C1TCvUzrCPJvJlstT8eB9l2GD+cQ6KkdklHIl3dWj82OZHDSszy1Ht+sBwnyWV78hl70UY1Jad4uQr/NglJkm0dN4D1pR2ts8C2niOInHOWJOxUil9VV+qpB/PlPhXWQAXoqVD/7/4nf2QCZa7wqxfODpxts6J+msFFL8RZE4mzZBHHovQaHSlzUvQM7Aj3lYDkqJf+texaupOwb0GmvOSIFBUvOJc70zTz0BKJP9RlDxd94Fd6XLhF1kJ12ddSD3Rib/j8X6KCTutpvFL+n90X3w6dQ+Ol5p0KscalUD9CIlHGW+rkusnwUjE+MNqqjrHBnLcs54KhXuiLsZdBga3Y9FK06Qndxr4+A/Ehh4q600fbV3TWujJzwMJXdvs66mdAx/sHGZRTEKVD3S1QyaMWanxaLalPjyg6QDY4yUb/Ja26wC+SGsSV9giOerE0jS0DZK2MKmZHYKenZSgSIPR9xUCwBS/ZmM7ZdAlU1yp8qo56cKQHLq2ebYBWiEwEf+hihTaqkvr1ln7LsrE+147mAp/Az9KdsexluZAg9d6QfuEJ2IUViQ8sGx4w+H3QnUOxTk3BogSFqpBa4ZV2nRrq6XSB7fHREyvq0XbrAAvlES37kvoREB1eRlvRQU8qMZQTqbEmvV/FfyD1AfKogi+83CZ7PTqp3m8wCbM/dE4rm/QRtDKkjfRGVK8QfwpFj6d+DXS8DfYh2VG/osvVX6EYJDTJJfV9MJpDYzThLzKWCEY/pcagvVKgI+pxGOMM7MOlRW9K5b0kPrUcQIWvzDpjOkEbFNAD9lhZRhTy1J+BeIadtKQedQMt+jwEg46soD5NiCSUp8aafCHRreQJU29UBZK/i+mG1MPoF7QRu8WaGZDuE2PNA7MzmdQgK+ilq9LDUSF02Vc6Pkv9nG4n0mdm1or6ER0LF/wLtOSC+jUVhB7ybeige404Y+qNzV6eCi0CUG8GHBaY02Vfqmh0Ejwmhm9FVkppmhxRbqih9zFddPfxivXLUv+LiueIi2+1oh5oeT4TcwpOYgX1I8AAI4sUJISMgJEUR3NVFloRoD5goibT3/Sn2fN/QPxwPSEvlIU/aU77Qn1Ej66YeqtyvOOoB0d6ceCCg62o71MpJZgI6x2wvBXUA3nfFP2I9saYCVPtG0fHUsVH1HP1gq7kdeXSpgL4N7Ogwj9kFoLnfK3IlwyVvHsr5IVeoRkx1If0HMwoRjmsqKdGdCNsrkKfp35G527ZnO9Ad9+YiXYMDerLInCUeslGTGak+wU1VMvzlkzA9ZoWI/Sfk0q/ZHHGjYADUannMdRveQsugBX11P0ruE16BI7uz/6aq1L5imsAFlAy6QNMzB22XK6A+iG3Ae6AyHz8ByxCNmqXejzi3WP10S+Z279uGyTZYQpqMPXgSO8t+FwQK+p3dDrODGnUOlhQD2x53rY5VB0Zk3wIc7rrqGfFDTh2P51e4Mv9xTTSS6iK//TeXakQ49blmvhNSgslpH4NdDx4bnzCivoVeBPXJk89PRyxsk5Bu9AsFV7h6mqTaTthqd9TVYVN0qF2kODpwaFuMJ8TQPREVJY0RNRPx8hMWJMAZkc9HQmbV8Tu9UBjtVDwgUXHFi9RH76HerpLPQ/2VGHmqSd27/K8CqjPBtS5JJ06qfoq9Vl76lc/m3oqtL6A+qdeQKn3zsCtGNUmLHfU6+Cpp91vQ724PJSjv0W9AzxnIqvN9+2o1/FjqQcO59jMVtXRUa/jp1Ivl8Dz5NYeoDrqdfy1vf4vUy8+Mtpzca1b9t9ew/8/H+5+rIY/Tql7yYnq0ry7c72Ov3auf1L/uXN94fNA1K+pe/u23X/2XP+V1jxqyLXFS9Tz1jziGKyz5hFDbmnNI8N5mzUP+e2C7ScNuS1s+DTR9pM2fOCSCEh5IIjNf1nq/502fOit5wsEvuq54/LGJ+08d82VC2loXrCahVYovs5v7rnjFB7qCWvy3M1ptIEMPue0ndNd5D3++mGzv/5C2mMlJIdW/npqJ6vx1zOT0M5fbxYBKUCXShnUxIVqXMDhfvypUI0JiNJhlg0IbiupBz7FC25FAZ0rLSHGBoj6D0bLeE+UDqlmUkbpgNjmCDeC1OJi5+aon4J0UCYe9/XYvOKcagLYE8vYPBqGb7HZHwkZXo3qAtEiNg+kxpSh3y1i82go4/VJAMiNYVT8KZiuxti8PYqaZ6bl5YjcE5w7EKRTReRS5acKnWQBjize56nnInJBenIZkUtPdx4qbMaslJqIXFS35bZSiFZczVarYOw4w9Pyehz+ABGAUgnLOPw5yipoPN6BOPyWVYwR9dgmtUYlaIp/oryr9nH44OPaoJlMaWpqFWDCUz8Ch3smXsOOepDhDpf9BKUHfzL7hmoPrE7MAGbfCKSsAE1FiZqkmxkMxB+dqXTzyqMMmEp4SFzXrZOaxCuQPMaIfDvqgZ53Ux3pxwQzx6ucuwM49J+a7tIEEWeMYsQB59yBrFJUgkZRKi+0+2i3p5kmarHZNci5c+lBJwX1a6xy7pD504fbqh31MNPWJdE/uNxOlWm7B5m2ntNwVkObPXcewsCZtsHV3DeOEvTfrdb1DEh8zyxp19uhTFtld0SW6Y055SkoEGmZaRuCbwuG+ltehQDz613dDjvlih1V+fWo7oAU6OS59z6KvyKJQyZcH1S2VJtk8usDI6B8JVD/1fx69GmLqyb80gvKr1crAIIEnxs3mT6AIZgpUd0w3lBagQDG+ltSj6tqBIoRMs246t5KVQ1ciyn2dBfw9HiI/areHJD4Tjxktfx1cop8zdjCVdXwfKXo9/EEi6FoRgQktRwhqt6nK1jBOdbGB6sS+YrusR5H6KCknIZaF1QBFQCtL0DB9Y9kHJ3OyX6wOp9ctsKWWksHl06TgetsV8f+ZHLcZVfhxiLXjEr2QE6J423OQM8PVwcR5RRqxha+lo5w5Tbv/mXpMzXO9Vo6uFBS4DvnZDBYjRe4Io8ylBzATZD/yI8W491xkJy9iKmlU8nYl8sovUI9sEI9fy6COA6grCx+oVTQGnMfiBTxPZi+KqFVODx6vQ84V8INDslxMhut17Owv0/GS7Fxi/pTmvpVV0Hr0X22ApihfMNiOkUr4D6P50gM0yGoXPx4WRCoJcSMV6gmkJeLp71Cffqf99TNsy8wq2jFaNnn8AK/uMfF178+zbPymbp5umiBu30T5Mk4S/Rfqpv3R2mhqVomis4l/gbrG6/eVC1zYF8ts6pyhA5dDQ8rtdM+QT0xtCGzThN8ss+iWwqaeqKdRZuoR5UGici3v+zMskYu77m7Y21VZPkOZcpQ6aEGKI4h5LS1a4Ta2QatuY9BJYLW36J0NE/RK+WRSWV1e+pDEAgABprRYFG9MrZ1UWh1NK3rCasRNIR6eQBKMAAytdiXd36AFurKJ8H22ytb0UPZGqlHhqON0ZEWVxzumXO79vCwsR6+9SUA6h6J6rvXQvWsEOq97Q4eVg2Q6zTu3FveW1K0YW70zy61uQmBlmhrvgoB2XONyiptbrdsvP8kLycMYkuMwYe1FXUVqDEBs5YV5JWyeYD6w6zhFp97EwGchXTRgnuG+Zbck+J8FhegAEeaEejQ6mLTDFo9FLiJzd03M8duv9e8a/ZXKDzfWolIQH3YY4+ZZQNc+aH0YH/3DSqu9kAo7O++IbZLC+pDeO2RinZ32jZw72/tbrxaXy3uCiMBgAerG68KKJs9pH66rede1MQxf2yseiLdbU0kSoqMtWggIG7T5rKzDOgT2g9aXme8q7PduPnXaXfP3YCWMUcN6o7VXdxi4Xun8mwIqb9xXye4fa7CzR2htLgGJQC3lOnkWN1zh5zjVlccgmOE9v+2N1lPfnNrTz5cEJa3W07PuIC4+lxAquaMfct9VvjKtaiY+lyGsUa8fz569Ui4KuplD2qX/APrpdugwcQB9LdaUQ9uXNApaEl9nooD77T1gwfD1nfaTscxf51r3mAMLghMM99vWipe4Prb2rtvisi8/hBa7kXERVmrMC9C1jof+83E32drGfFKr/C5GH2764ypNUT793TjGiVpXKfhPs50R0r+C7cUbpON2R6fBXC8+uAq6IeBdsFdBj0/oJufnw+K2HWHmSEi554xxqg0jR1P5lC8eEMc+Vz3l6gnUvjRadecVlQgkRHYyPIpuLJrcBWZhYQ2f0Cnpcmt/u8JTV1o7vYsWar9HF6qyU7btReutkNz2KdDUp+aEe7OJ8T86ZAdwWKbhhMDSpdG+lBO54YPX8ckOZg9WWbzlmGj6fGyMIdySOoqYqzpJI/AS8nP/gduIW9icv9xpwAAAABJRU5ErkJggg==" alt="" />

        </div>
        <button type='submit' onClick={signIn}>
            Sign In
        </button>
    </div>
  )
}

export default Login