const user = {
    name : 'Chayanne',
    imageUrl: 'https://th.bing.com/th/id/OIP.C2oGQQdZfzlwLu6tQGW16QHaE8?rs=1&pid=ImgDetMain',
    imageSize: 90,
}

export default function Perfil(){
    return(
        <>
            <h2>{user.name}</h2>
            <img 
                src={user.imageUrl} 
                alt={user.name} 
                className="avatar"
                style={{
                    width:user.imageSize,
                    height:user.imageSize
                }}
            />
        </>
    )
}