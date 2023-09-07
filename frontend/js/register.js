const register = {
    after_render: () =>{
        document
        .getElementById('signin-form')
        .addEventListener('submit', async (e) =>{
            document.location.hash = '/';
            // e.preventDefault();
            // const data = await signinapi({
            //     email: document.getElementById('email').value,
            //     password: document.getElementById('password').value,
            // });
            // if(data.error){
            //     alert(data.error);
            // } else{
            //     document.location.hash = '/';
            // }
        });
    },
    render: () =>{
        return `
        <div class="form-home">
    <form style="border" id="signin-form" action="">
        <ul class="form-items">
            <li>
                <h1 class="signin-h1">Register</h1>
            </li>
            <li >
            <label for="name">Name</label>
            <input class="signin-input" type="name" name="name" id="name" />
        </li>
            <li >
                <label for="email">Email</label>
                <input class="signin-input" type="email" name="email" id="email" />
            </li>
            <li>
                <label for="password">Password</label>
                <input class="signin-input" type="password" name="password" id="password" />
            </li>
            <li>
                <button type="submit" class="primary-submit">Sign-In</button>
            </li>
            <li>
                <div>
                    Already a user?
                    <a href="/#/register">Sign In</a>
                </div>
            </li>
        </ul>
    </form>
</div>
      
   
        `
    }
}

export default register;