using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EmployeeInfo.Models
{
    public class Employee
    {
        [Key]
        public int ID { get; set; }

        [StringLength(30, MinimumLength = 3)]
        public string Name { get; set; }

        [StringLength(150, MinimumLength = 10)]
        public string Address { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yy}", ApplyFormatInEditMode =true)]
        [Display(Name="Date of Birth")]
        public DateTime DoB { get; set; }

    }
}