module.exports = {

    posts: [],

    createNote(title, description) {
        this.posts.push({ id: generateID(), title, description })
    },

    deleteNote(id) {

        this.posts = this.posts.filter((item) => {
            return item.id != id
        });

    }
}

function generateID() {
    return Math.random().toString(36).substring(2)
}


