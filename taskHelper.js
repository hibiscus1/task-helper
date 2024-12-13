class SettingsField {
    input;
    container;
}

class TextField extends SettingsField {}

class TimeField extends SettingsField {}

class RadioField extends SettingsField {
    constructor(container, choices, value) {}
}

class DaysOfWeekField extends SettingsField {}

class FrequencyField extends SettingsField {}

class TaskSettings {
    constructor(container, definition) {
        this.title = definition["title"];
        this.description = definition["description"] ?? "";
        this.startTime = definition["startTime"] ?? "";
        this.duration = definition["duration"];
        this.flexibility = definition["flexibility"];
        this.priority = definition["priority"];
    }
}

class Statistics {
    records = [];

    lastCompleted;
    leftIncomplete;
    averageDuration;
    averageActiveTime;
    averageStartTime;

    constructor(records) {
        var count = 0;
        var totalActiveTime = 0;
        var totalDuration = 0;
        var totalStartTime = 0;

        for (const record in records) {
            var start = new Date(record["start"]);
            var end = new Date(record["end"]);
            // Convert both to seconds since start of that day

            activeSeconds = record["active"];
        }
    }
}

class Task {
    id;
    title;
    description;
    flexibility;
    startTime;
    duration;
    status;
    priority;
    lastCompleted;

    subtasks = [];
    currentSubtask;

    recordedStartTime;
    activeTime;
    statistics;

    constructor(definition, statistics = []) {
        this.title = definition["title"];
        this.description = definition["description"] ?? "";
        this.startTime = definition["startTime"] ?? "";
        this.duration = definition["duration"];
        this.flexibility = definition["flexibility"];
        this.priority = definition["priority"];

        var subtaskStatistics = statistics["subtasks"];

        for(var index of definition["subtasks"])
        {
            var subtask = definition["subtasks"][index];

        }
    }

    getDefinition() {
        var definition = {
            title: this.title,
            description: this.description,
        };
        return definition;
    }

    isComplete() {
        if (!this.subtasks) {
            for (var subtask of this.subtasks)
                if (subtask.status != "complete") return false;
        }
        return this.status == "complete";
    }

    getNextSubtask() {
        if (!this.subtasks) {
        }
        return null;
    }

    markDone() {
        if (!this.subtasks) {
        } else {
            this.status = "complete";
            var end = new Date();
            this.statistics.push({
                start: this.recordedStartTime,
                end: end,
            });
            this.recordedStartTime = null;
        }
    }

    buildUI(container) {}

    updateUI(container) {
        var title = container.querySelector(".task-title");
        title.innerHTML = this.title;

        var description = container.querySelector(".task-description");
        description.innerHTML = this.description ?? "";

        var subtaskTitle = container.querySelector(".subtask-title");
        subtaskTitle.innerHTML = this.currentSubtask ? this.currentSubtask.title : "";

        var timer = container.querySelector("timer");
        if(timer)
        {
            var hours = timer.querySelector(".hours");
            var minutes = time.querySelector(".minutes");
        }
        
        
        
        
    }
}

class Subtask extends Task {
    holdAfterCompletion;

    constructor(definition) {
        this.holdAfterCompletion = definition["holdAfterCompletion"];
    }

}


var today;
var currentTask;
var currentSubtask;
var heldTasks = [];
var tasks = [];
var scheduledTasks = {};

function checkTasks() {
    console.log("checkTasks called");
    var now = new Date();
    // If new day, then close current tasks and reset

    // Increment Timers on Current and Held Tasks

    updateTaskUI();
}

function getNextTask() 
{
    for (var index in tasks) 
    {
        var task = tasks[index]
        if (!task.isComplete()) 
            return task;
    }
    return null;
}

function updateTaskUI() 
{
    // Update current task
    var currentTaskUI = document.querySelector(".current-task");
    currentTask.updateUI(currentTaskUI);

    // Update held tasks
    const heldTasksUI = document.querySelectorAll(".held-task");
    heldTasksUI.forEach((heldTask) => {
        // 
    });
}

function markDone() 
{
    console.log("markDone called");
    currentTask.markDone();
    switch (currentTask.status) {
        case "held":
            heldTasks.push(currentTask);
        case "complete":
            currentTask = getNextTask();
            break;
        default:
            break;
    }
    updateTaskUI();
}

function start() {
    // Check local storage for settings and statistics
    for (var task in data) 
        tasks.push(new Task(data[task]));
    currentTask = getNextTask();
    var doneButton = document.getElementById("done-button");
    doneButton.addEventListener('click', markDone);
    updateTaskUI();
    setInterval(checkTasks, 60000);
}


start();
