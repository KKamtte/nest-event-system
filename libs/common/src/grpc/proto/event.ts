// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v3.21.12
// source: proto/event.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "event";

export interface CreateEventRequest {
  title: string;
  description: string;
  condition: string;
  startAt: string;
  endAt: string;
  isActive: boolean;
}

export interface CreateEventResponse {
  title: string;
  description: string;
  condition: string;
  startAt: string;
  endAt: string;
  isActive: boolean;
}

export interface GetEventsRequest {
}

export interface GetEventResponse {
  id: string;
  title: string;
  description: string;
  condition: string;
  startAt: string;
  endAt: string;
  isActive: boolean;
  createdAt: string;
}

export interface GetEventByIdRequest {
  eventId: string;
}

export interface GetEventByIdResponse {
  id: string;
  title: string;
  description: string;
  condition: string;
  startAt: string;
  endAt: string;
  isActive: boolean;
  createdAt: string;
}

export const EVENT_PACKAGE_NAME = "event";

export interface EventServiceClient {
  createEvent(request: CreateEventRequest): Observable<CreateEventResponse>;

  getEvents(request: GetEventsRequest): Observable<GetEventResponse>;

  getEventById(request: GetEventByIdRequest): Observable<GetEventByIdResponse>;
}

export interface EventServiceController {
  createEvent(
    request: CreateEventRequest,
  ): Promise<CreateEventResponse> | Observable<CreateEventResponse> | CreateEventResponse;

  getEvents(request: GetEventsRequest): Promise<GetEventResponse> | Observable<GetEventResponse> | GetEventResponse;

  getEventById(
    request: GetEventByIdRequest,
  ): Promise<GetEventByIdResponse> | Observable<GetEventByIdResponse> | GetEventByIdResponse;
}

export function EventServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createEvent", "getEvents", "getEventById"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("EventService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("EventService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const EVENT_SERVICE_NAME = "EventService";
