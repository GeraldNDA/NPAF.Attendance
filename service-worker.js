this.ontask = function(task) {
  alert(task.data.message);
  console.log("Task scheduled at: " + new Date(task.time));
  // From here on we can write the data to IndexedDB, send it to any open windows,
  // display a notification, etc.
}

