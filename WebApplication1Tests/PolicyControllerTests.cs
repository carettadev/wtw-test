using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Net.Http;
using WebApplication1.Controllers;
using WebApplication1.Data;
using Microsoft.AspNetCore.Mvc;

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
            var response = controller.Add(newPolicy);

            // Assert
            var policies = ((IList<Policy>)repository.Get());
            Assert.AreEqual(8, policies.Count);
            Assert.AreEqual(response.Value, newPolicy);
            Assert.IsTrue(policies.IndexOf(newPolicy) > -1);
            Assert.IsInstanceOfType(response.Value, typeof(Policy));
        }

        [TestMethod]
        public void CannotAddAPolicyAlreadyExisting()
        {
            // Arrange
            var repository = new PolicyRepository();
            var controller = new PolicyController(repository);
            var newPolicy = new Policy()
            {
                PolicyNumber = 462946,
                PolicyHolder = new PolicyHolder()
                {
                    Name = "Peter Parker",
                    Age = 34,
                    Gender = Gender.Male
                }
            };
            // Act
            var response =controller.Add(newPolicy);

            // Assert
            var policies = ((IList<Policy>)repository.Get());
            Assert.AreEqual(7, policies.Count);
            Assert.IsTrue(policies.IndexOf(newPolicy) == -1);
            Assert.IsInstanceOfType(response.Result, typeof(BadRequestResult));
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
            var response = controller.Update(383002, updatePolicy);

            // Assert
            var policies = ((IList<Policy>)repository.Get());
            Assert.AreEqual(7, policies.Count);
            Assert.AreEqual(response.Value, updatePolicy);
            Assert.IsTrue(policies.IndexOf(updatePolicy) > -1);
            Assert.IsInstanceOfType(response.Value, typeof(Policy));
        }


        [TestMethod]
        public void CannotUpdateAPolicyThatDoesntExist()
        {
            // Arrange
            var repository = new PolicyRepository();
            var controller = new PolicyController(repository);
            var updatePolicy = new Policy()
            {
                PolicyNumber = 1111111,
                PolicyHolder = new PolicyHolder()
                {
                    Name = "Peter Parker",
                    Age = 34,
                    Gender = Gender.Male
                }
            };

            // Act
            var response = controller.Update(383002, updatePolicy);

            // Assert
            var policies = ((IList<Policy>)repository.Get());
            Assert.AreEqual(7, policies.Count);
            Assert.IsTrue(policies.IndexOf(updatePolicy) == -1);
            Assert.IsInstanceOfType(response.Result, typeof(NotFoundResult));
        }

        [TestMethod]
        public void DeleteAPolicy()
        {
            // Arrange
            var repository = new PolicyRepository();
            var controller = new PolicyController(repository);

            // Act
            var response = controller.Remove(383002);

            // Assert
            Assert.IsTrue(response.Value);
            Assert.AreEqual(6, ((IList<Policy>)repository.Get()).Count);
        }

        [TestMethod]
        public void CannotDeleteAPolicyThatDoesntExist()
        {
            // Arrange
            var repository = new PolicyRepository();
            var controller = new PolicyController(repository);

            // Act
            var response = controller.Remove(1);

            // Assert
            Assert.AreEqual(7, ((IList<Policy>)repository.Get()).Count);
            Assert.IsInstanceOfType(response.Result, typeof(NotFoundResult));
        }
    }
}
