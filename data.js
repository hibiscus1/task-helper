var data = [
    {
        "id": 1,
        "title": "Get Ready",
        "description": "Start the day off right!",
        "flexibility": "strict",
        "startTime": "05:00",
        "recurrence": [
            {
                "every": 1,
                "unit": "day",
                "daysOfWeek": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]
            }
        ],
        "subtasks":
        [
            {
                "id": 1,
                "title": "Stretches"
            },
            {
                "id": 2,
                "title": "Exercise"
            },
            {
                "id": 3,
                "title": "Shower"
            },
            {
                "id": 4,
                "title": "Make Bed"
            },
            {
                "id": 5,
                "title": "Make Breakfast"
            },
            {
                "id": 6,
                "title": "Put Away Dishes"
            },
            {
                "id": 7,
                "title": "Clean Counter"
            },
        ]
    },
    {
        "id": 2,
        "title": "Evening Routine",
        "description": "Wind Down",
        "flexibility": "strict",
        "startTime": "21:00",
        "recurrence": [
            {
                "every": 1,
                "unit": "day",
                "daysOfWeek": ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat"]
            }
        ],
        "subtasks":
        [
            
            {
                "id": 1,
                "title": "Floss"
            },
            {
                "id": 2,
                "title": "Brush Teeth"
            },
            {
                "id": 3,
                "title": "Wash Face"
            }
        ]
    },
    {
        "id": 3,
        "title": "Carpal Exercises",
        "category": "health",
        "flexibility": "flexible",
        "priority": 10,
        "recurrence": [
            {
                "every": 2,
                "unit": "day",
                "daysOfWeek": ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat"]
            }
        ]
        
    },
    {
        "id": 4,
        "title": "Meditation",
        "category": "health",
        "flexibility": "flexible",
        "priority": 10,
        "recurrence": [
            {
                "every": 1,
                "unit": "day",
                "daysOfWeek": ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat"]
            }
        ]
    },
    {
        "id": 5,
        "title": "Voice Training",
        "duration": 30,
        "flexibility": "flexible",
        "priority": 16,
        "recurrence": [
            {
                "every": 1,
                "unit": "day",
                "daysOfWeek": ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat"]
            }
        ]
    },
    {
        "id": 6,
        "title": "Sketchbook",
        "category": "hobbies",
        "duration": 60,
        "flexibility": "flexible",
        "priority": 20,
        "recurrence": [
            {
                "every": 1,
                "unit": "day",
                "daysOfWeek": ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat"]
            }
        ]
    },
    {
        "id": 7,
        "title": "Reading",
        "category": "hobbies",
        "duration": 60,
        "flexibility": "flexible",
        "priority": 20,
        "recurrence": [
            {
                "every": 1,
                "unit": "day",
                "daysOfWeek": ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat"]
            }
        ]
    },
    {
        "id": 8,
        "title": "Sheets Laundry",
        "category": "chores",
        "flexibility": "flexible",
        "priority": 4,
        "recurrence": [
            {
                "every": 2,
                "unit": "week",
                "daysOfWeek": ["Sun", "Sat"]
            }
        ],
        "subtasks":
        [
            
            {
                "id": 1,
                "title": "Wash Sheets",
                "after": "hold"
            },
            {
                "id": 2,
                "title": "Dry Sheets",
                "after": "hold"
            },
            {
                "id": 3,
                "title": "Make the Bed"
            }
        ]
    },
    {
        "id": 9,
        "title": "Clothes Laundry",
        "category": "chores",
        "flexibility": "flexible",
        "priority": 6,
        "recurrence": [
            {
                "every": 1,
                "unit": "week",
                "daysOfWeek": ["Sun", "Sat"]
            }
        ],
        "subtasks":
        [
            
            {
                "id": 1,
                "title": "Wash Clothes",
                "after": "hold"
            },
            {
                "id": 2,
                "title": "Dry Clothes",
                "after": "hold"
            },
            {
                "id": 3,
                "title": "Fold and Put Away"
            }
        ]
    },
    {
        "id": 10,
        "title": "Towels Laundry",
        "category": "chores",
        "flexibility": "flexible",
        "priority": 6,
        "recurrence": [
            {
                "every": 1,
                "unit": "week",
                "daysOfWeek": ["Sun", "Sat"]
            }
        ],
        "subtasks":
        [
            
            {
                "id": 1,
                "title": "Wash Towels",
                "after": "hold"
            },
            {
                "id": 2,
                "title": "Dry Towels",
                "after": "hold"
            },
            {
                "id": 3,
                "title": "Fold and Put Away"
            }
        ]
    },
    {
        "id": 11,
        "title": "Replace Towels",
        "category": "chores",
        "flexibility": "flexible",
        "priority": 6,
        "recurrence": [
            {
                "every": 2,
                "unit": "day",
                "daysOfWeek": ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat"]
            }
        ]
    },
    {
        "id": 11,
        "title": "Go for a Walk",
        "category": "health",
        "flexibility": "flexible",
        "priority": 16,
        "recurrence": [
            {
                "every": 1,
                "unit": "day",
                "daysOfWeek": ["Sun", "Sat"]
            }
        ]
    },
    {
        "id": 12,
        "title": "Clean Floors",
        "category": "cleaning",
        "flexibility": "flexible",
        "priority": 12,
        "recurrence": [
            {
                "every": 2,
                "unit": "week",
                "daysOfWeek": ["Sun", "Sat"]
            }
        ],
        "subtasks":
        [
            
            {
                "id": 1,
                "title": "Vacuum"
            },
            {
                "id": 2,
                "title": "Mop"
            }
        ]
    },
    {
        "id": 13,
        "title": "Clean Out Fridge",
        "category": "cleaning",
        "flexibility": "flexible",
        "priority": 14,
        "recurrence": [
            {
                "every": 2,
                "unit": "week",
                "daysOfWeek": ["Sun", "Sat"]
            }
        ]
    },
    {
        "id": 14,
        "title": "Get Groceries",
        "category": "chores",
        "flexibility": "flexible",
        "priority": 10,
        "recurrence": [
            {
                "every": 1,
                "unit": "week",
                "daysOfWeek": ["Sun"]
            }
        ]
    },
    {
        "id": 15,
        "title": "Water Plants",
        "category": "chores",
        "flexibility": "flexible",
        "priority": 10,
        "recurrence": [
            {
                "every": 1,
                "unit": "week",
                "daysOfWeek": ["Sun"]
            }
        ]
    },

]

var statistics = [
    {
        'id': 1,
        'subtaskID': null,
        'records': [
            {
                'start': '2024-11-01T10:00:00',
                'end': '2024-11-01T10:10:00',
                'active': 1200
            },

        ]
    }
]
