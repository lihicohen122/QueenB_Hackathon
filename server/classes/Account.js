export class Account {
    fullName;
    email;
    password;
    points;

    constructor(fullName, email, password) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.points = 0;
    }

    add_points(points){
        if (points <= 0)
            throw new Error("Points must be a positive number");

        this.points += points;
    }

    delete_points(points){
        if (points <= 0)
            throw new Error("Points must be a positive number");

        if (this.points < points)
            throw new Error("Cannot delete more points than the current total");

        this.points -= points;
    }

    get_points(){
        return this.points;
    }

}