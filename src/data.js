export const data = {
    users: [
        {
            method: "get",
            url: "/users",
            description: {
                action: "Take all users",
                schema: "Whitout Schema",
            },
        },
        {
            method: "get",
            url: "/users/users-by-role/{role}",
            description: {
                action: "Take a user by role",
                schema: "Enter a user Role",
            },
        },
        {
            method: "get",
            url: "/users/{id}",
            description: {
                action: "Take a user by id",
                schema: "Enter a user ID",
            },
        },

        {
            method: "post",
            url: "/users",
            description: {
                action: "Create a new user",
                schema: [
                    `
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            role :  String ,
                            skills :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "post",
            url: "/signup",
            description: {
                action: "Sign up a new user",
                schema: [
                    `
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            skills :  String ,
                            password :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "post",
            url: "/login",
            description: {
                action: "Login a user",
                schema: [
                    `
                        {
                            email :  String ,
                            password :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "put",
            url: "/users/{id}",
            description: {
                action: "Update a user by id",
                schema: [
                    `
                        Enter a user ID
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            skills :  String ,
                            password :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "delete",
            url: "/users/{id}",
            description: {
                action: "Delete a user by id",
                schema: "Enter a user ID",
            },
        },
    ],
    courses: [
        {
            method: "get",
            url: "/courses",
            description: {
                action: "Take all courses",
                schema: "Whitout Schema",
            },
        },
        {
            method: "get",
            url: "/courses/course-by-role/{role}",
            description: {
                action: "Take a course by role",
                schema: "Enter a course Role",
            },
        },
        {
            method: "get",
            url: "/courses/{id}",
            description: {
                action: "Take a course by id",
                schema: "Enter a course ID",
            },
        },

        {
            method: "post",
            url: "/courses",
            description: {
                action: "Create a new course",
                schema: [
                    `
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            role :  String ,
                            skills :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "post",
            url: "/signup",
            description: {
                action: "Sign up a new course",
                schema: [
                    `
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            skills :  String ,
                            password :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "post",
            url: "/login",
            description: {
                action: "Login a course",
                schema: [
                    `
                        {
                            email :  String ,
                            password :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "put",
            url: "/courses/{id}",
            description: {
                action: "Update a course by id",
                schema: [
                    `
                        Enter a course ID
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            skills :  String ,
                            password :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "delete",
            url: "/courses/{id}",
            description: {
                action: "Delete a course by id",
                schema: "Enter a course ID",
            },
        },
    ],
    teachers: [
        {
            method: "get",
            url: "/teachers",
            description: {
                action: "Take all teachers",
                schema: "Whitout Schema",
            },
        },
        {
            method: "get",
            url: "/teachers/teacher-by-role/{role}",
            description: {
                action: "Take a teacher by role",
                schema: "Enter a teacher Role",
            },
        },
        {
            method: "get",
            url: "/teachers/{id}",
            description: {
                action: "Take a teacher by id",
                schema: "Enter a teacher ID",
            },
        },

        {
            method: "post",
            url: "/teachers",
            description: {
                action: "Create a new teacher",
                schema: [
                    `
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            role :  String ,
                            skills :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "post",
            url: "/signup",
            description: {
                action: "Sign up a new teacher",
                schema: [
                    `
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            skills :  String ,
                            password :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "post",
            url: "/login",
            description: {
                action: "Login a teacher",
                schema: [
                    `
                        {
                            email :  String ,
                            password :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "put",
            url: "/teachers/{id}",
            description: {
                action: "Update a teacher by id",
                schema: [
                    `
                        Enter a teacher ID
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            skills :  String ,
                            password :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "delete",
            url: "/teachers/{id}",
            description: {
                action: "Delete a teacher by id",
                schema: "Enter a teacher ID",
            },
        },
    ],
    students: [
        {
            method: "get",
            url: "/students",
            description: {
                action: "Take all students",
                schema: "Whitout Schema",
            },
        },
        {
            method: "get",
            url: "/students/student-by-role/{role}",
            description: {
                action: "Take a student by role",
                schema: "Enter a student Role",
            },
        },
        {
            method: "get",
            url: "/students/{id}",
            description: {
                action: "Take a student by id",
                schema: "Enter a student ID",
            },
        },

        {
            method: "post",
            url: "/students",
            description: {
                action: "Create a new student",
                schema: [
                    `
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            role :  String ,
                            skills :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "post",
            url: "/signup",
            description: {
                action: "Sign up a new student",
                schema: [
                    `
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            skills :  String ,
                            password :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "post",
            url: "/login",
            description: {
                action: "Login a student",
                schema: [
                    `
                        {
                            email :  String ,
                            password :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "put",
            url: "/students/{id}",
            description: {
                action: "Update a student by id",
                schema: [
                    `
                        Enter a student ID
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            skills :  String ,
                            password :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "delete",
            url: "/students/{id}",
            description: {
                action: "Delete a student by id",
                schema: "Enter a student ID",
            },
        },
    ],
    products: [
        {
            method: "get",
            url: "/products",
            description: {
                action: "Take all products",
                schema: "Whitout Schema",
            },
        },
        {
            method: "get",
            url: "/products/product-by-role/{role}",
            description: {
                action: "Take a product by role",
                schema: "Enter a product Role",
            },
        },
        {
            method: "get",
            url: "/products/{id}",
            description: {
                action: "Take a product by id",
                schema: "Enter a product ID",
            },
        },

        {
            method: "post",
            url: "/products",
            description: {
                action: "Create a new product",
                schema: [
                    `
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            role :  String ,
                            skills :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "post",
            url: "/signup",
            description: {
                action: "Sign up a new product",
                schema: [
                    `
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            skills :  String ,
                            password :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "post",
            url: "/login",
            description: {
                action: "Login a product",
                schema: [
                    `
                        {
                            email :  String ,
                            password :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "put",
            url: "/products/{id}",
            description: {
                action: "Update a product by id",
                schema: [
                    `
                        Enter a product ID
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            skills :  String ,
                            password :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "delete",
            url: "/products/{id}",
            description: {
                action: "Delete a product by id",
                schema: "Enter a product ID",
            },
        },
    ],
    guests: [
        {
            method: "get",
            url: "/guests",
            description: {
                action: "Take all guests",
                schema: "Whitout Schema",
            },
        },
        {
            method: "get",
            url: "/guests/guest-by-role/{role}",
            description: {
                action: "Take a guest by role",
                schema: "Enter a guest Role",
            },
        },
        {
            method: "get",
            url: "/guests/{id}",
            description: {
                action: "Take a guest by id",
                schema: "Enter a guest ID",
            },
        },

        {
            method: "post",
            url: "/guests",
            description: {
                action: "Create a new guest",
                schema: [
                    `
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            role :  String ,
                            skills :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "post",
            url: "/signup",
            description: {
                action: "Sign up a new guest",
                schema: [
                    `
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            skills :  String ,
                            password :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "post",
            url: "/login",
            description: {
                action: "Login a guest",
                schema: [
                    `
                        {
                            email :  String ,
                            password :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "put",
            url: "/guests/{id}",
            description: {
                action: "Update a guest by id",
                schema: [
                    `
                        Enter a guest ID
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            skills :  String ,
                            password :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "delete",
            url: "/guests/{id}",
            description: {
                action: "Delete a guest by id",
                schema: "Enter a guest ID",
            },
        },
    ],
    comments: [
        {
            method: "get",
            url: "/comments",
            description: {
                action: "Take all comments",
                schema: "Whitout Schema",
            },
        },
        {
            method: "get",
            url: "/comments/comment-by-role/{role}",
            description: {
                action: "Take a comment by role",
                schema: "Enter a comment Role",
            },
        },
        {
            method: "get",
            url: "/comments/{id}",
            description: {
                action: "Take a comment by id",
                schema: "Enter a comment ID",
            },
        },

        {
            method: "post",
            url: "/comments",
            description: {
                action: "Create a new comment",
                schema: [
                    `
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            role :  String ,
                            skills :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "post",
            url: "/signup",
            description: {
                action: "Sign up a new comment",
                schema: [
                    `
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            skills :  String ,
                            password :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "post",
            url: "/login",
            description: {
                action: "Login a comment",
                schema: [
                    `
                        {
                            email :  String ,
                            password :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "put",
            url: "/comments/{id}",
            description: {
                action: "Update a comment by id",
                schema: [
                    `
                        Enter a comment ID
                        {
                            fName :  String ,
                            lName :  String ,
                            email :  String ,
                            mobile :  String ,
                            title :  String ,
                            skills :  String ,
                            password :  String ,
                            image :  String
                        }
                    `,
                ],
            },
        },
        {
            method: "delete",
            url: "/comments/{id}",
            description: {
                action: "Delete a comment by id",
                schema: "Enter a comment ID",
            },
        },
    ],
};
