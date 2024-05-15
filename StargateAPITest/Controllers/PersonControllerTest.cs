using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Moq;
using StargateAPI.Business.Dtos;
using StargateAPI.Business.Queries;
using StargateAPI.Controllers;

namespace StargateAPITest.Controllers
{
    public class PersonControllerTest
    {
        Mock<IMediator> _mediator;
        PersonController _personController;

        public PersonControllerTest() 
        {
            _mediator = new Mock<IMediator>();
            _personController = new PersonController(_mediator.Object);
        }

        [Fact]
        public async void GetPeople_Succeeds()
        {
            var people = new List<PersonAstronaut>();
            people.Add(new PersonAstronaut { Name = "Samantha Watkins" });
            people.Add(new PersonAstronaut { Name = "Andrew Richardson" });
            _mediator.Setup(x => x.Send(It.IsAny<GetPeople>(),default(CancellationToken)))
                .ReturnsAsync(new GetPeopleResult() 
                { 
                    People = people,
                    ResponseCode = 200, 
                    Success = true
                });

            var result = await _personController.GetPeople();

            Assert.NotNull(result);
            Assert.IsType<ObjectResult>(result);
            var objectResult = (ObjectResult)result;
            Assert.Equal(objectResult.StatusCode, 200);
            Assert.NotNull(objectResult.Value);
            var getPeopleResult = (GetPeopleResult)objectResult.Value;
            Assert.Equal(people, getPeopleResult.People);
        }

        [Fact]
        public async void GetPeople_Fails()
        {
            var people = new List<PersonAstronaut>();
            people.Add(new PersonAstronaut { Name = "Samantha Watkins" });
            people.Add(new PersonAstronaut { Name = "Andrew Richardson" });
            _mediator.Setup(x => x.Send(It.IsAny<GetPeople>(), default(CancellationToken)))
                .ThrowsAsync(new Exception("No people exist"));

            var result = await _personController.GetPeople();

            Assert.NotNull(result);
            Assert.IsType<ObjectResult>(result);
            var objectResult = (ObjectResult)result;
            Assert.Equal(objectResult.StatusCode, 500);
        }
    }
}
