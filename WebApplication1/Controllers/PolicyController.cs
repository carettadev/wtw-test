using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class PolicyController : Controller
    {
        private readonly IPolicyRepository _policyRepository;

        public PolicyController(IPolicyRepository policyRepository)
        {
            _policyRepository = policyRepository;
        }

        public IEnumerable<Policy> Get()
        {
            return _policyRepository.Get().OrderBy(policy => policy.PolicyNumber);
        }


        [HttpPut("{policyNumber}")]
        public IEnumerable<Policy> Update(int policyNumber, [FromBody]Policy policy)
        {
            try
            {
                if (policy != null && policyNumber == policy.PolicyNumber)
                {
                    _policyRepository.Update(policy);
                }
            }
            catch (Exception ex)
            {
                // log exception
                throw;
            }
            return Get();
        }

        [HttpPost]
        public IEnumerable<Policy> Add([FromBody]Policy policy)
        {
            try
            {
                if (policy != null)
                {
                    _policyRepository.Add(policy);
                }
            }
            catch (Exception ex)
            {
                // log exception
                throw;
            }
            return Get();
        }

        [HttpDelete("{policyNumber}")]
        public IEnumerable<Policy> Remove(int policyNumber)
        {
            try
            {
                _policyRepository.Remove(policyNumber);
            }
            catch (Exception ex)
            {
                // log exception
                throw;
            }
            return Get();
        }
    }
}
