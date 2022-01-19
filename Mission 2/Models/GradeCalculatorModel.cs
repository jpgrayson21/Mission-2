using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_2.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        public float Assignment { get; set; }
        public float GroupProject { get; set; }
        public float Quizzes { get; set; }
        public float Exams { get; set; }
        public float Intex { get; set; }
    }
}
