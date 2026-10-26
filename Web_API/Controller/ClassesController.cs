using Microsoft.AspNetCore.Mvc;

namespace Web_API.Controllers
{
    [ApiController]
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

        [HttpGet]
        public ActionResult<IEnumerable<ClassItem>> GetClasses()
        {
            return Ok(Classes);
        }
    }

    public class ClassItem
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string InstructorName { get; set; } = string.Empty;
        public string ScheduledDateText { get; set; } = string.Empty;
        public int DurationMinutes { get; set; }
        public string Status { get; set; } = string.Empty;
        public bool IsOnline { get; set; }
        public string? TeamsMeetingLink { get; set; }
        public string? LocationAddress { get; set; }
        public int Capacity { get; set; }
        public int EnrolledCount { get; set; }
    }
}