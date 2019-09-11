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
            return _policyRepository.Get().OrderBy(policy => policy.PolicyNumber).ToList<Policy>();
        }


        [HttpPut("{policyNumber}")]
        public ActionResult<Policy> Update(int policyNumber, [FromBody]Policy policy)
        {
            try
            {
                //ensure we have a valid policy and it already exists/updatable
                if (policy != null && policyNumber == policy.PolicyNumber && Get().Any(p => p.PolicyNumber == policyNumber))
                {
                    _policyRepository.Update(policy);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                // log exception
                throw;
            }
            return policy;
        }

        [HttpPost]
        public ActionResult<Policy> Add([FromBody]Policy policy)
        {
            try
            {
                //ensure we have a valid policy and it doesn't already exist
                if (policy != null && !Get().Any(p => p.PolicyNumber == policy.PolicyNumber))
                {
                    _policyRepository.Add(policy);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                // log exception
                throw;
            }
            return policy;
        }

        [HttpDelete("{policyNumber}")]
        public ActionResult<Boolean> Remove(int policyNumber)
        {
            try
            {
                //ensure policy exists before deleting
                if (Get().Any(p => p.PolicyNumber == policyNumber))
                {
                    _policyRepository.Remove(policyNumber);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                // log exception
                throw;
            }
            return true;
        }
    }
}
