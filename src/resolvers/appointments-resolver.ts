import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { AppointmentModel } from "../dtos/models/appointment-model";

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
  async helloWorld() {
    return "hello wolrld";
  }

  @Mutation(() => AppointmentModel)
  async createAppointment(@Arg("data") data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.startsAt,
    };
    return appointment;
  }
}
