using System.Collections.Generic;

namespace WebApplication1.Data
{
    public interface IPolicyRepository
    {
        IEnumerable<Policy> Get();
        void Add(Policy policy);
        void Update(Policy policy);
        void Remove(int policyNumber);
    }
}