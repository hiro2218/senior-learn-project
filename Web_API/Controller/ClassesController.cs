using Microsoft.AspNetCore.Mvc;

// Define the controller folder's namespace
namespace Web_API.Controllers
{
    // Mark this class as an API controller
    [ApiController]

    // Set the API URL to api/classes
    [Route("api/[controller]")]
    public class ClassesController : ControllerBase
    {
        // Mock data representing SeniorLearn classes       
        private static readonly List<ClassItem> Classes = new()
        {
            new ClassItem
            {
                Id = 1,
                Title = "Digital Marketing Workshop",
                Description = "Learn the basics of online marketing and social media.",
                InstructorName = "Ken Norton",
                ScheduledDateText = "11 Nov 2026 - 10:00 AM",
                DurationMinutes = 90,
                Status = "Scheduled",
                IsOnline = true,
                Capacity = 20,
                EnrolledCount = 12
            },
            new ClassItem
            {
                Id = 2,
                Title = "Photography Basics",
                Description = "Understand aperture, shutter speed, and ISO.",
                InstructorName = "Peter Parker",
                ScheduledDateText = "16 Nov 2026 - 2:00 PM",
                DurationMinutes = 120,
                Status = "Scheduled",
                IsOnline = false,
                LocationAddress = "Hornsby Community Centre, Room 12",
                Capacity = 15,
                EnrolledCount = 15
            }
        };

        // Handle HTTP GET requests to retrieve all classes
        [HttpGet]
        public ActionResult<IEnumerable<ClassItem>> GetClasses()
        {
            // Return the class list with HTTP 200 (OK)
            return Ok(Classes);
        }
    }

    // Define the data structure for one class
    public class ClassItem
    {
        // Unique ID for each class
        public int Id { get; set; }

        // Name of the class
        public string Title { get; set; } = string.Empty;

        // Details about the class
        public string Description { get; set; } = string.Empty;

        // Name of the class instructor
        public string InstructorName { get; set; } = string.Empty;

        // Date and time of the class
        public string ScheduledDateText { get; set; } = string.Empty;

        // Length of the class in minutes
        public int DurationMinutes { get; set; }

        // Current class status
        public string Status { get; set; } = string.Empty;

        // True if the class is online, otherwise false
        public bool IsOnline { get; set; }

        // Online meeting link (optional)
        public string? TeamsMeetingLink { get; set; }

        // Physical class location (optional)
        public string? LocationAddress { get; set; }

        // Maximum number of students allowed
        public int Capacity { get; set; }

        // Number of students currently enrolled
        public int EnrolledCount { get; set; }
    }
}