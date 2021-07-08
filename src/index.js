const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'xxxxxxx', { expiresIn: '7 days' })

//     console.log(token)

//     const data = jwt.verify(token, 'xxxxxx')
//     console.log(data)
// }

// myFunction()

// const Task = require('./models/task')
// const User = require('./models/user')

// const myFunction = async () => {
//     // const task = await Task.findById('60e731a8d896383b94dd929b')
//     // await task.populate('owner').execPopulate()

//     // console.log(task.owner)

//     const user = await User.findById('60e731132b9f732e647ae4d3')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// myFunction()
