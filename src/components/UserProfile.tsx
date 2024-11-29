type UserProfileProps = {
    user: { name: string, age: number }
}


const UserProfile: React.FC<UserProfileProps> = ({user}) => {
    return (
        <div data-testid="user-profile">
            <div data-testid="user-name">{user.name}</div>
            <div data-testid="user-age">{user.age}</div>
        </div>
    )
}

export default UserProfile