import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const username = localStorage.getItem("username");
    const pageReset = () => {
        navigate('/');
    };

    const handleMoveFileUploadPage = () => {
        navigate('/FileUpload');
    }

    return (
        <div className='Header'>
            <div>logo</div>
            <p className='logo' onClick={pageReset}>FoodPlayer</p>
            {username && ( // username이 존재하는 경우
                <div className="profile">
                    <ul className='username'> {username}
                        <li>회원정보</li>
                        <li><button onClick={handleMoveFileUploadPage}>File Upload</button></li>
                        <li>로그아웃</li>
                    </ul>   
                </div>
            )}
        </div>
    );
}

export default Header;
