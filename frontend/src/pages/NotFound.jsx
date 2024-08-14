import Sidebar from "../components/Sidebar"

function NotFound() {
    return (
        <div>
        <Sidebar/>

        <h1 style={{color: 'white',
            marginLeft: 400
        }}>404 Not Found</h1>
        <p style={{color: 'white',
            marginLeft: 400
        }}>The page you're looking for doesn't exist!</p>
    </div>
    );
}

export default NotFound
