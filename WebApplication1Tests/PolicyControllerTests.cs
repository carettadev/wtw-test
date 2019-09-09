using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Net.Http;
using WebApplication1.Controllers;
using WebApplication1.Data;

namespace WebApplication1Tests
{
    [TestClass]
    public class PolicyControllerTests
    {
        [TestMethod]
        public void GetAllPolicies()
        {
            // Arrange
            var repository = new PolicyRepository();
            var controller = new PolicyController(repository);

            // Act
            IList<Policy> response = (IList<Policy>)controller.Get();

            // Assert
            Assert.AreEqual(7, response.Count);
        }

        [TestMethod]
        public void AddAPolicy()
        {
            // Arrange
            var repository = new PolicyRepository();
            var controller = new PolicyController(repository);
            var newPolicy = new Policy()
            {
                PolicyNumber = 123456,
                PolicyHolder = new PolicyHolder() 
                {
                    Name = "Peter Parker",
                    Age = 34,
                    Gender = Gender.Male
                }
            };
            // Act
            IList<Policy> response = (IList<Policy>)controller.Add(newPolicy);

            // Assert
            Assert.AreEqual(8, response.Count);
        }

        [TestMethod]
        public void UpdateAPolicy()
        {
            // Arrange
            var repository = new PolicyRepository();
            var controller = new PolicyController(repository);
            var updatePolicy = new Policy()
            {
                PolicyNumber = 383002,
                PolicyHolder = new PolicyHolder()
                {
                    Name = "Peter Parker",
                    Age = 34,
                    Gender = Gender.Male
                }
            };

            // Act
            IList<Policy> response = (IList<Policy>)controller.Update(383002, updatePolicy);

            // Assert
            Assert.AreEqual(7, response.Count);
        }


        [TestMethod]
        public void DeleteAPolicy()
        {
            // Arrange
            var repository = new PolicyRepository();
            var controller = new PolicyController(repository);

            // Act
            IList<Policy> response = (IList<Policy>)controller.Remove(383002);

            // Assert
            Assert.AreEqual(6, response.Count);
        }
    }
}
