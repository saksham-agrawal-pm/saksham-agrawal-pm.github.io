document.addEventListener('DOMContentLoaded', async () => {
    const profilePicture = document.getElementById('profile-picture');
    const fullName = document.getElementById('full-name');

    try {
        const response = await fetch('https://api.github.com/users/saksham-agrawal-pm');
        const data = await response.json();

        profilePicture.src = data.avatar_url;
        fullName.textContent = data.name;
    } catch (error) {
        console.error('Error fetching GitHub profile:', error);
    }
});
