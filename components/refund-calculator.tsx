'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Train, Calculator, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { TICKET_TYPES, TRAIN_CLASSES, CANCELLATION_TIMES } from '@/lib/constants';
import { calculateRefund } from '@/lib/calculate-refund';
import { PageHeader } from '@/components/PageHeader';
import { MenuToggle } from '@/components/MenuToggle';
import { RefundResult, RefundResultProps } from '@/components/RefundResult';
import { CancellationRules } from '@/components/CancellationRules';
import { Footer } from '@/components/Footer';

const formSchema = z.object({
  ticketType: z.string(),
  trainClass: z.enum(['ac1', 'ac2', 'ac3', 'sleeper', 'second']),
  cancellationTime: z.string(),
  ticketAmount: z.string().transform(Number),
  passengers: z.string().transform(Number),
});

export function RefundCalculator() {
  const [result, setResult] = useState<RefundResultProps | null>(null);
  const [selectedMenu, setSelectedMenu] = useState<'calculator' | 'rules'>('calculator');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticketType: '',
      trainClass: undefined,
      cancellationTime: '',
      ticketAmount: 0,
      passengers: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const result = calculateRefund({
      ...values,
      ticketAmount: Number(values.ticketAmount),
      passengers: Number(values.passengers),
    });
    setResult(result);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <PageHeader />
        <MenuToggle selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

        {selectedMenu === 'calculator' && (
          <div className="max-w-2xl mx-auto">
                        <Alert className="mb-6">
              <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                This calculator works only for e-tickets and normal trains. For special trains and Tatkal tickets, please refer to the rules section.
                </AlertDescription>
            </Alert>
            <Card className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="ticketType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ticket Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select ticket type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {TICKET_TYPES.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="trainClass"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Train Class</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select train class" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {TRAIN_CLASSES.map((cls) => (
                              <SelectItem key={cls.value} value={cls.value}>
                                {cls.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cancellationTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cancellation Time Before Departure</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time before departure" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {CANCELLATION_TIMES.map((time) => (
                              <SelectItem key={time.value} value={time.value}>
                                {time.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ticketAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Ticket Amount (₹)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="0"
                            step="1"
                            onKeyDown={(e) => {
                              if (e.key === '-' || e.key === '+' || e.key === 'e') {
                                e.preventDefault();
                              }
                            }}
                            placeholder="(4 * 200 = 800) Enter 800"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="passengers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Passengers</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="0"
                            step="1"
                            onKeyDown={(e) => {
                              if (e.key === '-' || e.key === '+' || e.key === 'e') {
                                e.preventDefault();
                              }
                            }}
                            placeholder="Enter number of passengers"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" size="lg">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Refund
                  </Button>
                </form>
              </Form>
              {result && <RefundResult {...result} />}
            </Card>
            <Alert className="mt-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                This calculator provides an approximate value of the refund. Please confirm the details with the official IRCTC website.
              </AlertDescription>
            </Alert>
          </div>
        )}

        {selectedMenu === 'rules' && <CancellationRules />}
      </div>
      <Footer />
    </div>
  );
}