using EmployeeInfo.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EmployeeInfo.Data
{
    public class EmployeeDbContext : DbContext
    {

        public EmployeeDbContext() : base("EmpDB")
        {

        }

        public DbSet<Employee> Employees { get; set; }


    }
}