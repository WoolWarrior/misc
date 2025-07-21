const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Sample tasks
const tasks = [
  {
    name: 'Task 1',
    description: 'First task description',
    status: 'to do'
  },
  {
    name: 'Task 2',
    description: 'Second task description',
    status: 'completed'
  }
];

// GET endpoint to return list of tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// PUT endpoint to change the status of a task by name
app.put('/tasks/:name/status', (req, res) => {
  const { name } = req.params;
  const { status } = req.body;
  const validStatuses = ['to do', 'completed'];

  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Invalid status value.' });
  }

  const task = tasks.find(t => t.name === name);
  if (!task) {
    return res.status(404).json({ error: 'Task not found.' });
  }

  task.status = status;
  res.json(task);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} `);
});