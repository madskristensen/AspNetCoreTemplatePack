using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mvc.Fast.Models;

namespace Mvc.Fast.Controllers
{
    /// <summary>
    /// A controller intercepts the incoming browser request and returns
    /// an HTML view (.cshtml file) or any other type of data.
    /// </summary>
    public class HomeController : Controller
    {
        [ResponseCache(Duration = 3600)]
        public IActionResult Index()
        {
            // The view being returned is calculated based on the name of the
            // controller (Home) and the name of the action method (Index).
            // So in this case, the view returned is /Views/Home/Index.cshtml.
            return View();
        }

        [ResponseCache(Duration = 3600)]
        public IActionResult About()
        {
            // Creates a model and passes it on to the view.
            Employee[] model =
            {
                new Employee { Name = "Alfred", Title = "Manager" },
                new Employee { Name = "Sarah", Title = "Accountant" }
            };

            return View(model);
        }
    }
}
