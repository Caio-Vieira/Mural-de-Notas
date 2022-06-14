module.exports = {

    posts: [],

    getNote() {
        return this.posts
    },

    createNote(title, description) {

        if (title == "" || description == "") {
            return { status: 400 }
        }
        else {
            this.posts.push({ id: generateID(), title, description })
            return { status: 200 }
        }

    },

    deleteNote(id) {

        let findID = this.posts.map((item) => {
            return item.id
        })

        if (findID.indexOf(id) !== -1) {
            
            this.posts = this.posts.filter((item) => {
                return item.id != id
            });

            return { status: 200 }
        }

        else {
            return { status: 400 }

        }
    }
}

function generateID() {
    return Math.random().toString(36).substring(2)
}


