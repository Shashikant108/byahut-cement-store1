import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { products } from '../data/products';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Inquiry() {
  const query = useQuery();
  const slug = query.get('product') || '';
  const product = products.find(p => p.slug === slug);

  const [form] = Form.useForm();
  React.useEffect(() => {
    form.setFieldsValue({ product: product ? product.name : '' });
  }, [product, form]);

  function onFinish(values) {
    message.success('Enquiry submitted!');
    form.resetFields();
    form.setFieldsValue({ product: product ? product.name : '' });
    // Here you can POST to backend
    // console.log(values);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-brand-link font-semibold no-underline">Bhayut Cement Store</Link>
          <span className="text-slate-500 text-sm">Product Enquiry</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h1 className="m-0 text-2xl font-bold text-brand-dark">Send an Enquiry</h1>
          <p className="m-0 mt-1 text-slate-600 text-sm">We’ll call you back with today’s price and availability.</p>

          <Form form={form} layout="vertical" onFinish={onFinish} className="mt-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Form.Item label="Product" name="product" rules={[{ required: true }]}>
                <Input placeholder="Product name" />
              </Form.Item>
              <Form.Item label="Quantity" name="quantity">
                <Input placeholder="e.g., 20 bags, 2 brass, 500 kg" />
              </Form.Item>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Form.Item label="Your Name" name="name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
                <Input placeholder="+91" />
              </Form.Item>
            </div>

            <Form.Item label="Email (optional)" name="email" rules={[{ type: 'email' }]}>
              <Input placeholder="you@email.com" />
            </Form.Item>

            <Form.Item label="Message" name="message">
              <Input.TextArea rows={4} placeholder="Site location, delivery date, brand preference…" />
            </Form.Item>

            <div className="flex items-center gap-3">
              <Button type="primary" htmlType="submit">Submit Enquiry</Button>
              <a href="tel:+9709930***" className="px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 no-underline text-brand-dark">Call Now</a>
            </div>
          </Form>
        </div>
      </main>
    </div>
  );
}


