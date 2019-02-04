const initialData = {
    tasks: {
        "task-1": { id: "task-1", "content": "Odell"},
        "task-2": { id: "task-2", "content": "Baere"},
        "task-3": { id: "task-3", "content": "Cerebral"},
        "task-4": { id: "task-4", "content": "Alpine Dog"}

    },
    columns: {
        "column-1":{
            "id": "column-1",
            "title": "All",
            "taskIds": ["task-1", "task-2", "task-3", "task-4",]
        },
        "column-2":{
            "id": "column-2",
            "title": "Itinerary 1",
            "taskIds": []
        },
        "column-3":{
            "id": "column-3",
            "title": "Itinerary 2",
            "taskIds": []
        }
    },

    columnOrder: ["column-1", "column-2", "column-3"]
}

export default initialData;