const CreateTask = () => {
  return (
    <form>
      <h2>Create Task</h2>

      <div>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <br />
        <textarea id="description" name="description" />
      </div>

      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
