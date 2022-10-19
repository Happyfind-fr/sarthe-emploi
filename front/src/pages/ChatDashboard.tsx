import S from '../boot/socket.io';

export default function ChatDashboard() {
    S.on('connect', () => {
        console.log(S.id)
    })
    return (
        <div>

        </div>
    )
}