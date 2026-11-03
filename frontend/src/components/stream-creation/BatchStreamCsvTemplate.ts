export const SAMPLE_BATCH_STREAM_CSV_HEADER = 'recipient_address,amount,token_symbol,duration_seconds,start_time_iso';

export const SAMPLE_BATCH_STREAM_CSV_ROWS = [
  'GAAZI4TCR3TY5OJHCTJC2A4QSY6CJWJH5IAJTGKIN2ER7LBNVKOCCWN7,100.0,USDC,2592000,2026-11-01T00:00:00Z',
  'GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5,250.5,XLM,604800,2026-11-01T00:00:00Z'
];

export function generateSampleCsvContent(): string {
  return [SAMPLE_BATCH_STREAM_CSV_HEADER, ...SAMPLE_BATCH_STREAM_CSV_ROWS].join('\n');
}

export function triggerSampleCsvDownload(filename = 'flowfi_batch_stream_template.csv'): void {
  const content = generateSampleCsvContent();
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
