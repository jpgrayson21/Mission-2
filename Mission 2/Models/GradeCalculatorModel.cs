using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_2.Models
{
    public class GradeCalculatorModel
    {
        /*data validation with required and range attributes*/
        [Required] [Range(0,100)]
        public float Assignment { get; set; }
        [Required] [Range(0, 100)]
        public float GroupProject { get; set; }
        [Required] [Range(0, 100)]
        public float Quizzes { get; set; }
        [Required] [Range(0, 100)]
        public float Exams { get; set; }
        [Required] [Range(0, 100)]
        public float Intex { get; set; }
    }
}
