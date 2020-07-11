import { Subjects, Publisher, OrderCancelledEvent } from 'common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCancelled;
}
