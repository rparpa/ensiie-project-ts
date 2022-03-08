import {UserRepository} from "../user/userRepository";
import {getClient} from "../db";

export async function getPage(): Promise<string> {
    const users = await new UserRepository(await getClient()).fetchAll();
    return `
<html>
<head>
    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>

<div class="container">
    <h3>Hello world from Docker! node${process.version}</h3>

    <table class="table table-bordered table-hover table-striped">
        <thead style="font-weight: bold">
            <td>#</td>
            <td>Firstname</td>
            <td>Lastname</td>
            <td>Age</td>
        </thead>
        <tbody>
        ${users.reduce((usersHtml, user) => usersHtml + `
            <tr>
                <td>${user.id}</td>
                <td>${user.firstname}</td>
                <td>${user.lastname}</td>
                <td>${user.getAge()} years</td>
            </tr>`, '')}
        </tbody>
    </table>
</div>
</body>
</html>
    `;
}